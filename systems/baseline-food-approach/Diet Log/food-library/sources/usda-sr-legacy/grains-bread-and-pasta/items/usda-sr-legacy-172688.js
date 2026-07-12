/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172688",
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
      "gramsPerUnit": 32.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, whole-wheat, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 161.0,
    "carbs_g": 42.7,
    "energy_kcal": 252.0,
    "fat_g": 3.5,
    "fibre_g": 6.0,
    "folate_ug": 42.0,
    "iron_mg": 2.47,
    "magnesium_mg": 75.0,
    "omega3_g": 0.137,
    "phosphorus_mg": 212.0,
    "potassium_mg": 254.0,
    "protein_g": 12.4,
    "salt_g": 1.1375,
    "sat_fat_g": 0.722,
    "sodium_mg": 455.0,
    "sugar_g": 4.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.66,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172688",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
