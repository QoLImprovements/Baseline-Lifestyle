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
  "id": "usda-fndds-2709144",
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
  "name": "Soup, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 6.09,
    "energy_kcal": 49.0,
    "fat_g": 1.3,
    "fibre_g": 1.8,
    "folate_ug": 33.0,
    "iron_mg": 0.66,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 52.0,
    "potassium_mg": 169.0,
    "protein_g": 3.51,
    "salt_g": 0.6175,
    "sat_fat_g": 0.353,
    "sodium_mg": 247.0,
    "sugar_g": 1.31,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 10.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709144",
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
