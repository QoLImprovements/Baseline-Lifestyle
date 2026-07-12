/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-tablespoon",
  "description": "Not included in a food category",
  "id": "usda-fndds-2705588",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chocolate beverage powder, dry mix, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 455.0,
    "carbs_g": 90.3,
    "energy_kcal": 400.0,
    "fat_g": 2.27,
    "fibre_g": 4.5,
    "folate_ug": 4.0,
    "iron_mg": 0.0,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 280.0,
    "protein_g": 4.55,
    "salt_g": 0.34,
    "sat_fat_g": 2.27,
    "sodium_mg": 136.0,
    "sugar_g": 81.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 27.3,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705588",
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
