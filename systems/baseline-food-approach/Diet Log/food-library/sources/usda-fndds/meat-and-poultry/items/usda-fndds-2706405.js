/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706405",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-link-with-sauce",
      "kind": "unit",
      "label": "1 link with sauce"
    }
  ],
  "name": "Sausage with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 2.58,
    "energy_kcal": 234.0,
    "fat_g": 19.1,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 1.12,
    "magnesium_mg": 16.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 112.0,
    "potassium_mg": 327.0,
    "protein_g": 13.3,
    "salt_g": 2.1575,
    "sat_fat_g": 6.17,
    "sodium_mg": 863.0,
    "sugar_g": 1.82,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706405",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
