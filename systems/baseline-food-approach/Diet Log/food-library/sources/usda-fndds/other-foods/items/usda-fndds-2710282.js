/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Sugars and honey",
  "id": "usda-fndds-2710282",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 3.5,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Agave liquid sweetener",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 76.4,
    "energy_kcal": 310.0,
    "fat_g": 0.45,
    "fibre_g": 0.2,
    "folate_ug": 30.0,
    "iron_mg": 0.09,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 4.0,
    "protein_g": 0.09,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 68.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 22.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710282",
  "state": "Unspecified",
  "subcategory": "Sugars and honey",
  "tags": [
    "other-foods",
    "sugars-and-honey",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
