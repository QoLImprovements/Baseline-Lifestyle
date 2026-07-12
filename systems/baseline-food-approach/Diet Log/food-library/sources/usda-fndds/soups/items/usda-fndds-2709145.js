/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "1-cup",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2709145",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soup, noodle, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 10.1,
    "energy_kcal": 90.0,
    "fat_g": 2.99,
    "fibre_g": 0.8,
    "folate_ug": 32.0,
    "iron_mg": 0.68,
    "magnesium_mg": 13.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 62.0,
    "potassium_mg": 102.0,
    "protein_g": 5.48,
    "salt_g": 0.725,
    "sat_fat_g": 0.689,
    "sodium_mg": 290.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 10.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709145",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "soups",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
