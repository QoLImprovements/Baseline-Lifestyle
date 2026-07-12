/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "guideline-amount-per-cup-of-hot-cereal",
  "description": "Milk, nonfat",
  "id": "usda-fndds-2705396",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "guideline-amount-per-cup-of-hot-cereal",
      "kind": "unit",
      "label": "Guideline amount per cup of hot cereal"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Milk, dry, reconstituted, nonfat",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 4.6,
    "energy_kcal": 32.0,
    "fat_g": 0.07,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.03,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 159.0,
    "protein_g": 3.2,
    "salt_g": 0.1275,
    "sat_fat_g": 0.044,
    "sodium_mg": 51.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705396",
  "state": "Unspecified",
  "subcategory": "Milk, nonfat",
  "tags": [
    "milk-dairy-and-eggs",
    "milk-nonfat",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
