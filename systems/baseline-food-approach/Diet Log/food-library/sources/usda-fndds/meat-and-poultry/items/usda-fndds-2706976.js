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
  "id": "usda-fndds-2706976",
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
      "gramsPerUnit": 270.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
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
      "gramsPerUnit": 270.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    }
  ],
  "name": "Barbecue pork sandwich, on wheat bun",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 23.3,
    "energy_kcal": 238.0,
    "fat_g": 8.86,
    "fibre_g": 2.0,
    "folate_ug": 26.0,
    "iron_mg": 1.8,
    "magnesium_mg": 32.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 163.0,
    "potassium_mg": 262.0,
    "protein_g": 15.5,
    "salt_g": 1.3725,
    "sat_fat_g": 2.89,
    "sodium_mg": 549.0,
    "sugar_g": 8.38,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706976",
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
