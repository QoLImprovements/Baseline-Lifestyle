/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "guideline-amount-on-large-sandwich",
  "description": "Margarine",
  "id": "usda-fndds-2710161",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 0.25,
      "key": "1-spray",
      "kind": "unit",
      "label": "1 spray"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "guideline-amount-per-slice-of-bread-roll",
      "kind": "unit",
      "label": "Guideline amount per slice of bread/roll"
    }
  ],
  "name": "Butter replacement, liquid",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.86,
    "energy_kcal": 533.0,
    "fat_g": 59.8,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.0,
    "magnesium_mg": 2.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 16.0,
    "potassium_mg": 30.0,
    "protein_g": 0.17,
    "salt_g": 1.5375,
    "sat_fat_g": 12.1,
    "sodium_mg": 615.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 21.1,
    "vitamin_k_ug": 101.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710161",
  "state": "Unspecified",
  "subcategory": "Margarine",
  "tags": [
    "margarine",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
