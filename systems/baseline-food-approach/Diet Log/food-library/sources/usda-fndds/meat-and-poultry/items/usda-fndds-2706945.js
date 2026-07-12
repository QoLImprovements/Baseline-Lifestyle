/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat and BBQ sandwiches",
  "id": "usda-fndds-2706945",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Meatball sandwich or sub",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 21.3,
    "energy_kcal": 207.0,
    "fat_g": 8.23,
    "fibre_g": 1.2,
    "folate_ug": 42.0,
    "iron_mg": 2.01,
    "magnesium_mg": 21.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 161.0,
    "potassium_mg": 221.0,
    "protein_g": 11.3,
    "salt_g": 1.2775,
    "sat_fat_g": 3.42,
    "sodium_mg": 511.0,
    "sugar_g": 4.65,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706945",
  "state": "Unspecified",
  "subcategory": "Meat and BBQ sandwiches",
  "tags": [
    "meat-and-bbq-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
