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
  "id": "usda-fndds-2709757",
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
  "name": "Soup, tomato",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 3.64,
    "energy_kcal": 19.0,
    "fat_g": 0.41,
    "fibre_g": 0.9,
    "folate_ug": 7.0,
    "iron_mg": 0.44,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 169.0,
    "protein_g": 0.65,
    "salt_g": 0.61,
    "sat_fat_g": 0.057,
    "sodium_mg": 244.0,
    "sugar_g": 2.01,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709757",
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
