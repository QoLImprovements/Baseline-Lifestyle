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
  "id": "usda-fndds-2706809",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey salad, made with any type of fat free dressing",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 6.28,
    "energy_kcal": 111.0,
    "fat_g": 3.81,
    "fibre_g": 0.9,
    "folate_ug": 13.0,
    "iron_mg": 0.44,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 123.0,
    "potassium_mg": 207.0,
    "protein_g": 13.3,
    "salt_g": 1.3125,
    "sat_fat_g": 0.927,
    "sodium_mg": 525.0,
    "sugar_g": 4.31,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 16.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706809",
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
