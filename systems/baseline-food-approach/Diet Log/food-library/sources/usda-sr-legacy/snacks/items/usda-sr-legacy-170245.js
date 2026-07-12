/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-170245",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, corn-based, extruded, chips, barbecue-flavor, made with enriched masa flour",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 56.2,
    "energy_kcal": 2190.0,
    "fat_g": 32.7,
    "fibre_g": 0.0,
    "folate_ug": 200.0,
    "iron_mg": 4.9,
    "magnesium_mg": 77.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 207.0,
    "potassium_mg": 236.0,
    "protein_g": 7.0,
    "salt_g": 1.9075,
    "sat_fat_g": 4.46,
    "sodium_mg": 763.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170245",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
