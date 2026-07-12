/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707607",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bread, native, water, toasted, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 57.3,
    "energy_kcal": 306.0,
    "fat_g": 3.58,
    "fibre_g": 2.0,
    "folate_ug": 77.0,
    "iron_mg": 4.28,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 128.0,
    "protein_g": 11.4,
    "salt_g": 1.495,
    "sat_fat_g": 0.778,
    "sodium_mg": 598.0,
    "sugar_g": 1.96,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707607",
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
