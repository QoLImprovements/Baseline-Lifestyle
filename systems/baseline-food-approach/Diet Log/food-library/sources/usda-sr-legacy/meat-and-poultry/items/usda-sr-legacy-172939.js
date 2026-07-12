/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link-4-long-x-1-1-8-dia",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172939",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "link-4-long-x-1-1-8-dia",
      "kind": "unit",
      "label": "link (4\" long x 1-1/8\" dia)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "link-little-2-long-x-3-4-dia",
      "kind": "unit",
      "label": "link, little (2\" long x 3/4\" dia)"
    }
  ],
  "name": "Sausage, smoked link sausage, pork and beef (nonfat dry milk added)",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 1.92,
    "energy_kcal": 1310.0,
    "fat_g": 27.6,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.47,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 286.0,
    "protein_g": 13.3,
    "salt_g": 2.925,
    "sat_fat_g": 9.72,
    "sodium_mg": 1170.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172939",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
