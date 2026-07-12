/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "guideline-amount-per-sandwich",
      "kind": "unit",
      "label": "Guideline amount per sandwich"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Soy nut butter",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 23.0,
    "energy_kcal": 613.0,
    "fat_g": 50.0,
    "fibre_g": 10.6,
    "folate_ug": 126.0,
    "iron_mg": 2.35,
    "magnesium_mg": 87.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 217.0,
    "potassium_mg": 878.0,
    "protein_g": 23.0,
    "salt_g": 0.725,
    "sat_fat_g": 7.38,
    "sodium_mg": 290.0,
    "sugar_g": 7.47,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 4.79,
    "vitamin_k_ug": 94.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707545",
  "state": "Unspecified",
  "subcategory": "Soy and meat-alternative products",
  "tags": [
    "meat-and-poultry",
    "soy-and-meat-alternative-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
