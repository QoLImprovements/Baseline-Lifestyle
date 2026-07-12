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
  "id": "usda-fndds-2708718",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-hallaca-5-3-4-x-2-1-2-x-1-2",
      "kind": "unit",
      "label": "1 hallaca (5-3/4\" x 2-1/2\" x 1/2\")"
    }
  ],
  "name": "Hayacas, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 9.37,
    "energy_kcal": 157.0,
    "fat_g": 10.8,
    "fibre_g": 1.1,
    "folate_ug": 14.0,
    "iron_mg": 0.92,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 72.0,
    "potassium_mg": 174.0,
    "protein_g": 5.82,
    "salt_g": 0.44,
    "sat_fat_g": 1.82,
    "sodium_mg": 176.0,
    "sugar_g": 3.38,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 10.6,
    "vitamin_e_mg": 2.23,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708718",
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
