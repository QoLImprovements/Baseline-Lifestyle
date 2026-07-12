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
  "id": "usda-fndds-2706507",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-stuffed-pork-chop",
      "kind": "unit",
      "label": "1 stuffed pork chop"
    }
  ],
  "name": "Ham or pork with stuffing",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 10.4,
    "energy_kcal": 143.0,
    "fat_g": 8.27,
    "fibre_g": 0.4,
    "folate_ug": 21.0,
    "iron_mg": 0.71,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 62.0,
    "potassium_mg": 108.0,
    "protein_g": 6.26,
    "salt_g": 0.7975,
    "sat_fat_g": 1.87,
    "sodium_mg": 319.0,
    "sugar_g": 1.13,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706507",
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
