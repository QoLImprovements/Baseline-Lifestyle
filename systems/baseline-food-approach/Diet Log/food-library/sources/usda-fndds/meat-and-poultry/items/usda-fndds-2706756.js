/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706756",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ham or pork salad",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.83,
    "energy_kcal": 230.0,
    "fat_g": 18.1,
    "fibre_g": 0.4,
    "folate_ug": 11.0,
    "iron_mg": 0.58,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 127.0,
    "potassium_mg": 227.0,
    "protein_g": 13.3,
    "salt_g": 2.4725,
    "sat_fat_g": 3.34,
    "sodium_mg": 989.0,
    "sugar_g": 2.06,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 44.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706756",
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
