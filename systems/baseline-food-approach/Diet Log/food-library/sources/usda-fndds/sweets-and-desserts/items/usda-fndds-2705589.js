/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "guideline-amount-per-fl-oz-of-beverage",
  "description": "Not included in a food category",
  "id": "usda-fndds-2705589",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chocolate beverage powder, light, dry mix, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 909.0,
    "carbs_g": 68.3,
    "energy_kcal": 350.0,
    "fat_g": 4.5,
    "fibre_g": 9.1,
    "folate_ug": 7.0,
    "iron_mg": 3.27,
    "magnesium_mg": 410.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 500.0,
    "potassium_mg": 1700.0,
    "protein_g": 9.09,
    "salt_g": 1.25,
    "sat_fat_g": 0.0,
    "sodium_mg": 500.0,
    "sugar_g": 27.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 54.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705589",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "not-included-in-a-food-category",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
