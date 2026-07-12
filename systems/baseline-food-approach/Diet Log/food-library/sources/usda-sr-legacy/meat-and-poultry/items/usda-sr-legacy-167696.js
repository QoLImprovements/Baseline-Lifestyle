/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "frankfurter",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-167696",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "frankfurter",
      "kind": "unit",
      "label": "frankfurter"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Frankfurter, beef, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.6,
    "energy_kcal": 140.0,
    "fat_g": 9.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.15,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 191.0,
    "potassium_mg": 129.0,
    "protein_g": 12.0,
    "salt_g": 1.86,
    "sat_fat_g": 1.53,
    "sodium_mg": 744.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167696",
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
