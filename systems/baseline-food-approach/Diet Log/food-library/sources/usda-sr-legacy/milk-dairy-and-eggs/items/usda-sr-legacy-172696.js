/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "piece-1-6-of-pie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172696",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "piece-1-6-of-pie",
      "kind": "unit",
      "label": "piece (1/6 of pie)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, boston cream pie, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 42.9,
    "energy_kcal": 1050.0,
    "fat_g": 8.5,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 0.38,
    "magnesium_mg": 6.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 49.0,
    "potassium_mg": 39.0,
    "protein_g": 2.4,
    "salt_g": 0.635,
    "sat_fat_g": 2.44,
    "sodium_mg": 254.0,
    "sugar_g": 36.1,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172696",
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
