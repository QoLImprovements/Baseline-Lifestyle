/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706540",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey and rice with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 15.4,
    "energy_kcal": 135.0,
    "fat_g": 5.48,
    "fibre_g": 0.4,
    "folate_ug": 29.0,
    "iron_mg": 0.71,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 87.0,
    "protein_g": 5.67,
    "salt_g": 0.865,
    "sat_fat_g": 1.01,
    "sodium_mg": 346.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706540",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "fungi",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
