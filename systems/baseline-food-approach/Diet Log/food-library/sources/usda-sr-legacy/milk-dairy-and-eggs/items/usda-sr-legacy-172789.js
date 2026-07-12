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
  "id": "usda-sr-legacy-172789",
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
      "gramsPerUnit": 126.0,
      "key": "piece-1-8-of-9-dia",
      "kind": "unit",
      "label": "piece (1/8 of 9\" dia)"
    }
  ],
  "name": "Pie, vanilla cream, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 32.6,
    "energy_kcal": 1160.0,
    "fat_g": 14.4,
    "fibre_g": 0.6,
    "folate_ug": 26.0,
    "iron_mg": 1.02,
    "magnesium_mg": 13.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 104.0,
    "potassium_mg": 126.0,
    "protein_g": 4.8,
    "salt_g": 0.65,
    "sat_fat_g": 4.03,
    "sodium_mg": 260.0,
    "sugar_g": 12.7,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172789",
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
