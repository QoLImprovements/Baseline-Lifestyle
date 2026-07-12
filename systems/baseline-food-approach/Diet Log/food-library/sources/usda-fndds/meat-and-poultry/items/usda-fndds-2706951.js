/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    }
  ],
  "name": "Corned beef sandwich on wheat, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 212.0,
    "carbs_g": 20.9,
    "energy_kcal": 273.0,
    "fat_g": 13.9,
    "fibre_g": 2.4,
    "folate_ug": 36.0,
    "iron_mg": 2.21,
    "magnesium_mg": 34.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 213.0,
    "potassium_mg": 165.0,
    "protein_g": 15.6,
    "salt_g": 1.8625,
    "sat_fat_g": 5.41,
    "sodium_mg": 745.0,
    "sugar_g": 2.71,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706951",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
