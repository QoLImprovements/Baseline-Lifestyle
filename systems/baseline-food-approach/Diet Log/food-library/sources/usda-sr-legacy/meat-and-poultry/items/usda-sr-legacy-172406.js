/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "capon",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172406",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2152.0,
      "key": "capon",
      "kind": "unit",
      "label": "capon"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, capons, meat and skin and giblets and neck, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.08,
    "energy_kcal": 971.0,
    "fat_g": 16.9,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 1.41,
    "magnesium_mg": 21.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 181.0,
    "potassium_mg": 213.0,
    "protein_g": 18.5,
    "salt_g": 0.1175,
    "sat_fat_g": 4.89,
    "sodium_mg": 47.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 272.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172406",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
