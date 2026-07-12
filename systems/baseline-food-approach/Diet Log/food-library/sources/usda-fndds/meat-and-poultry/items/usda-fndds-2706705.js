/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706705",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey,stuffing, and vegetables excluding carrots, broccoli, and dark green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 14.8,
    "energy_kcal": 165.0,
    "fat_g": 8.75,
    "fibre_g": 1.2,
    "folate_ug": 32.0,
    "iron_mg": 0.86,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 81.0,
    "potassium_mg": 142.0,
    "protein_g": 7.17,
    "salt_g": 0.9025,
    "sat_fat_g": 1.75,
    "sodium_mg": 361.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 12.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706705",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
