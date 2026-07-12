/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large-sandwich",
  "description": "Meat and BBQ sandwiches",
  "id": "usda-fndds-2706882",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    }
  ],
  "name": "Barbecue sandwich, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 24.9,
    "energy_kcal": 238.0,
    "fat_g": 8.12,
    "fibre_g": 0.8,
    "folate_ug": 34.0,
    "iron_mg": 1.94,
    "magnesium_mg": 21.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 141.0,
    "potassium_mg": 233.0,
    "protein_g": 15.3,
    "salt_g": 1.4025,
    "sat_fat_g": 2.66,
    "sodium_mg": 561.0,
    "sugar_g": 9.07,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706882",
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
