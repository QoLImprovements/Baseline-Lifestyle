/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173863",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Ham, sliced, pre-packaged, deli meat (96%fat free, water added)",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.7,
    "energy_kcal": 446.0,
    "fat_g": 4.04,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.59,
    "magnesium_mg": 19.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 252.0,
    "potassium_mg": 463.0,
    "protein_g": 16.8,
    "salt_g": 2.3625,
    "sat_fat_g": 1.23,
    "sodium_mg": 945.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173863",
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
