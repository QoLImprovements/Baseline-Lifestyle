/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-miniature-slider",
  "description": "Meat and BBQ sandwiches",
  "id": "usda-fndds-2706959",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    }
  ],
  "name": "Steak sandwich or sub on wheat",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 23.5,
    "energy_kcal": 247.0,
    "fat_g": 8.27,
    "fibre_g": 2.8,
    "folate_ug": 40.0,
    "iron_mg": 2.91,
    "magnesium_mg": 39.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 193.0,
    "potassium_mg": 252.0,
    "protein_g": 18.9,
    "salt_g": 1.015,
    "sat_fat_g": 2.92,
    "sodium_mg": 406.0,
    "sugar_g": 2.69,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706959",
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
