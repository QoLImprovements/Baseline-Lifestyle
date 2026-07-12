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
  "id": "usda-fndds-2707613",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-piece-1-4-of-10-dia",
      "kind": "unit",
      "label": "1 piece (1/4 of 10\" dia)"
    },
    {
      "gramsPerUnit": 2.4,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "1-naan-10-dia",
      "kind": "unit",
      "label": "1 Naan (10\" dia)"
    }
  ],
  "name": "Bread, naan",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 50.2,
    "energy_kcal": 311.0,
    "fat_g": 7.28,
    "fibre_g": 5.2,
    "folate_ug": 15.0,
    "iron_mg": 1.88,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 204.0,
    "potassium_mg": 201.0,
    "protein_g": 11.1,
    "salt_g": 1.27,
    "sat_fat_g": 3.16,
    "sodium_mg": 508.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.44,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707613",
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
