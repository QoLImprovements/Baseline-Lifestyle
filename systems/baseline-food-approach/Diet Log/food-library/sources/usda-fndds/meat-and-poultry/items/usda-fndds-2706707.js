/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, stuffing, and vegetables excluding carrots, broccoli, and dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 11.8,
    "energy_kcal": 128.0,
    "fat_g": 6.82,
    "fibre_g": 0.8,
    "folate_ug": 23.0,
    "iron_mg": 0.63,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 111.0,
    "protein_g": 5.22,
    "salt_g": 0.8875,
    "sat_fat_g": 1.39,
    "sodium_mg": 355.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 9.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706707",
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
