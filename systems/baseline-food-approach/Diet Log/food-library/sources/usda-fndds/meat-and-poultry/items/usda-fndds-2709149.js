/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2709149",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soup, chicken noodle",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.21,
    "energy_kcal": 53.0,
    "fat_g": 1.4,
    "fibre_g": 0.7,
    "folate_ug": 19.0,
    "iron_mg": 0.38,
    "magnesium_mg": 11.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 45.0,
    "potassium_mg": 108.0,
    "protein_g": 3.84,
    "salt_g": 0.62,
    "sat_fat_g": 0.323,
    "sodium_mg": 248.0,
    "sugar_g": 0.81,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709149",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "meat-and-poultry",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
