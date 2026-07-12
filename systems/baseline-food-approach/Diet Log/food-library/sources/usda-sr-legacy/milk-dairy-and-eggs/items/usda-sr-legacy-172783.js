/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "piece-1-6-of-8-pie",
      "kind": "unit",
      "label": "piece (1/6 of 8\" pie)"
    }
  ],
  "name": "Pie, egg custard, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 20.8,
    "energy_kcal": 879.0,
    "fat_g": 11.6,
    "fibre_g": 1.6,
    "folate_ug": 20.0,
    "iron_mg": 0.58,
    "magnesium_mg": 11.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 112.0,
    "potassium_mg": 106.0,
    "protein_g": 5.5,
    "salt_g": 0.6875,
    "sat_fat_g": 2.35,
    "sodium_mg": 275.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172783",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
