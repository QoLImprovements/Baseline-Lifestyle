/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Margarine",
  "id": "usda-fndds-2710159",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
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
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-pat",
      "kind": "unit",
      "label": "1 pat"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Margarine, stick",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.7,
    "energy_kcal": 717.0,
    "fat_g": 80.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.06,
    "magnesium_mg": 3.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 5.0,
    "potassium_mg": 18.0,
    "protein_g": 0.16,
    "salt_g": 1.8775,
    "sat_fat_g": 15.2,
    "sodium_mg": 751.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 9.0,
    "vitamin_k_ug": 93.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710159",
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
