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
  "id": "usda-fndds-2706439",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken with mole sauce",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 3.22,
    "energy_kcal": 137.0,
    "fat_g": 5.58,
    "fibre_g": 0.3,
    "folate_ug": 8.0,
    "iron_mg": 0.78,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 172.0,
    "potassium_mg": 232.0,
    "protein_g": 19.0,
    "salt_g": 1.355,
    "sat_fat_g": 1.66,
    "sodium_mg": 542.0,
    "sugar_g": 2.12,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706439",
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
