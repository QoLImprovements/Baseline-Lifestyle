/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Yeast breads",
  "id": "usda-fndds-2707796",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.1,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "1-injera-12-dia",
      "kind": "unit",
      "label": "1 injera (12\" dia)"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-cup-pieces",
      "kind": "unit",
      "label": "1 cup, pieces"
    }
  ],
  "name": "Injera, Ethiopian bread",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 19.4,
    "energy_kcal": 93.0,
    "fat_g": 0.68,
    "fibre_g": 2.8,
    "folate_ug": 29.0,
    "iron_mg": 0.98,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 102.0,
    "protein_g": 2.55,
    "salt_g": 0.565,
    "sat_fat_g": 0.177,
    "sodium_mg": 226.0,
    "sugar_g": 1.03,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707796",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
