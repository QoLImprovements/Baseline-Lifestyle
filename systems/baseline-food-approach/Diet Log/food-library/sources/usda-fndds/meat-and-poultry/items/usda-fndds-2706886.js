/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-submarine",
  "description": "Meat and BBQ sandwiches",
  "id": "usda-fndds-2706886",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
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
      "gramsPerUnit": 180.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    }
  ],
  "name": "Barbecue beef sandwich, on wheat bun",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 23.3,
    "energy_kcal": 240.0,
    "fat_g": 8.52,
    "fibre_g": 2.0,
    "folate_ug": 28.0,
    "iron_mg": 2.45,
    "magnesium_mg": 31.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 155.0,
    "potassium_mg": 236.0,
    "protein_g": 17.0,
    "salt_g": 1.36,
    "sat_fat_g": 3.0,
    "sodium_mg": 544.0,
    "sugar_g": 8.38,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706886",
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
