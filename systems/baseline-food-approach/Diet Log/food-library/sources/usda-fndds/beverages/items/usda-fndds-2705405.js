/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup",
  "description": "Plant-based milk",
  "id": "usda-fndds-2705405",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "guideline-amount-per-cup-of-hot-cereal",
      "kind": "unit",
      "label": "Guideline amount per cup of hot cereal"
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
    },
    {
      "gramsPerUnit": 2.5,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    }
  ],
  "name": "Soy milk, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 1.29,
    "energy_kcal": 38.0,
    "fat_g": 2.12,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 0.54,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 158.0,
    "protein_g": 3.55,
    "salt_g": 0.085,
    "sat_fat_g": 0.314,
    "sodium_mg": 34.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705405",
  "state": "Unspecified",
  "subcategory": "Plant-based milk",
  "tags": [
    "beverages",
    "plant-based-milk",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
