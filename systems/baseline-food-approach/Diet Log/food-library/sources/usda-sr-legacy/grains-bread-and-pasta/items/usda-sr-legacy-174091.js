/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174091",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "slice-1-serving",
      "kind": "unit",
      "label": "slice 1 serving"
    }
  ],
  "name": "Bread, french or vienna, whole wheat",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 49.1,
    "energy_kcal": 1000.0,
    "fat_g": 1.04,
    "fibre_g": 4.2,
    "folate_ug": 96.0,
    "iron_mg": 0.75,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 159.0,
    "potassium_mg": 163.0,
    "protein_g": 8.33,
    "salt_g": 0.9375,
    "sat_fat_g": 0.0,
    "sodium_mg": 375.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174091",
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
