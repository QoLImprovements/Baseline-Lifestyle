/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708979",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice with Spanish sausage, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 32.4,
    "energy_kcal": 289.0,
    "fat_g": 13.6,
    "fibre_g": 0.8,
    "folate_ug": 66.0,
    "iron_mg": 2.29,
    "magnesium_mg": 20.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 105.0,
    "potassium_mg": 189.0,
    "protein_g": 8.39,
    "salt_g": 2.3575,
    "sat_fat_g": 3.73,
    "sodium_mg": 943.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708979",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "meat-and-poultry",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
