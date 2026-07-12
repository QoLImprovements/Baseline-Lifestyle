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
  "id": "usda-fndds-2706415",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
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
      "gramsPerUnit": 96.0,
      "key": "1-slice-with-sauce",
      "kind": "unit",
      "label": "1 slice with sauce"
    }
  ],
  "name": "Veal scallopini",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 1.47,
    "energy_kcal": 241.0,
    "fat_g": 17.5,
    "fibre_g": 0.4,
    "folate_ug": 16.0,
    "iron_mg": 0.75,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 177.0,
    "potassium_mg": 281.0,
    "protein_g": 18.7,
    "salt_g": 0.93,
    "sat_fat_g": 4.8,
    "sodium_mg": 372.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 109.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 15.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706415",
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
