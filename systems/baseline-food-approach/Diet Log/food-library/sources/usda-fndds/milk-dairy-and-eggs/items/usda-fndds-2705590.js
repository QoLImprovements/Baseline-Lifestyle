/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-tablespoon",
  "description": "Not included in a food category",
  "id": "usda-fndds-2705590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.5,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 1.4,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Milk, malted, dry mix, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 909.0,
    "carbs_g": 93.0,
    "energy_kcal": 372.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 16.4,
    "magnesium_mg": 218.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 1.325,
    "sat_fat_g": 0.0,
    "sodium_mg": 530.0,
    "sugar_g": 72.7,
    "vitamin_a_ug": 1360.0,
    "vitamin_c_mg": 54.5,
    "vitamin_e_mg": 12.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705590",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "milk-dairy-and-eggs",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
