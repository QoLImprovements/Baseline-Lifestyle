/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-croquette",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "1-croquette",
      "kind": "unit",
      "label": "1 croquette"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-cake-or-patty",
      "kind": "unit",
      "label": "1 cake or patty"
    }
  ],
  "name": "Chicken or turkey cake, patty, or croquette",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 2.59,
    "energy_kcal": 262.0,
    "fat_g": 18.8,
    "fibre_g": 0.2,
    "folate_ug": 15.0,
    "iron_mg": 0.86,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 196.0,
    "potassium_mg": 228.0,
    "protein_g": 20.8,
    "salt_g": 1.4375,
    "sat_fat_g": 3.41,
    "sodium_mg": 575.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 22.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706545",
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
