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
  "id": "usda-fndds-2706958",
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
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Steak sandwich or sub on white",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 25.4,
    "energy_kcal": 249.0,
    "fat_g": 8.07,
    "fibre_g": 1.2,
    "folate_ug": 60.0,
    "iron_mg": 3.02,
    "magnesium_mg": 24.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 165.0,
    "potassium_mg": 215.0,
    "protein_g": 17.9,
    "salt_g": 1.0275,
    "sat_fat_g": 2.98,
    "sodium_mg": 411.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706958",
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
