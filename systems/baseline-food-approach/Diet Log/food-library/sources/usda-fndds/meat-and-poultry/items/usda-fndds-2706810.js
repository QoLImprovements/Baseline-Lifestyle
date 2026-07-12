/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706810",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 344.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 344.0,
      "key": "1-fast-food-order",
      "kind": "unit",
      "label": "1 fast food order"
    }
  ],
  "name": "Chicken or turkey garden salad, chicken and/or turkey, tomato and/or carrots, other vegetables, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 3.04,
    "energy_kcal": 64.0,
    "fat_g": 1.33,
    "fibre_g": 1.0,
    "folate_ug": 30.0,
    "iron_mg": 0.36,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 276.0,
    "protein_g": 10.1,
    "salt_g": 0.34,
    "sat_fat_g": 0.312,
    "sodium_mg": 136.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 161.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 58.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706810",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
