/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710615",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 12.5,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Sports drink, dry concentrate, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 97.9,
    "energy_kcal": 380.0,
    "fat_g": 1.01,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.17,
    "magnesium_mg": 165.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 39.0,
    "protein_g": 0.0,
    "salt_g": 0.325,
    "sat_fat_g": 0.183,
    "sodium_mg": 130.0,
    "sugar_g": 97.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 40.6,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710615",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "beverages",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
