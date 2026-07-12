/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2706490",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Biryani with meat",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 12.2,
    "energy_kcal": 145.0,
    "fat_g": 6.79,
    "fibre_g": 1.0,
    "folate_ug": 21.0,
    "iron_mg": 1.12,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 229.0,
    "protein_g": 8.5,
    "salt_g": 0.245,
    "sat_fat_g": 2.97,
    "sodium_mg": 98.0,
    "sugar_g": 1.69,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706490",
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
