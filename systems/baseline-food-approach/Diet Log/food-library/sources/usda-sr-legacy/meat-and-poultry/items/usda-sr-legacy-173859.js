/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link-4-long",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173859",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "link-4-long",
      "kind": "unit",
      "label": "link (4\" long)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Sausage, pork, chorizo, link or ground, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 3.78,
    "energy_kcal": 296.0,
    "fat_g": 25.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.41,
    "magnesium_mg": 20.0,
    "omega3_g": 0.178,
    "phosphorus_mg": 149.0,
    "potassium_mg": 308.0,
    "protein_g": 13.6,
    "salt_g": 1.97,
    "sat_fat_g": 8.6,
    "sodium_mg": 788.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173859",
  "state": "Raw",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "raw",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
