/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "guideline-amount-on-large-sandwich",
  "description": "Mayonnaise",
  "id": "usda-fndds-2710173",
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
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
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
    }
  ],
  "name": "Tartar sauce",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 13.3,
    "energy_kcal": 211.0,
    "fat_g": 16.7,
    "fibre_g": 0.5,
    "folate_ug": 5.0,
    "iron_mg": 0.25,
    "magnesium_mg": 6.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 17.0,
    "potassium_mg": 68.0,
    "protein_g": 1.0,
    "salt_g": 1.6675,
    "sat_fat_g": 3.33,
    "sodium_mg": 667.0,
    "sugar_g": 4.25,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 50.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710173",
  "state": "Unspecified",
  "subcategory": "Mayonnaise",
  "tags": [
    "condiments-and-sauces",
    "mayonnaise",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
