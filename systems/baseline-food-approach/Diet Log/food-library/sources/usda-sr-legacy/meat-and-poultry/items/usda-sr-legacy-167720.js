/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-nfs",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-167720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 179.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    }
  ],
  "name": "Babyfood, meat, beef with vegetables, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 8.72,
    "energy_kcal": 69.0,
    "fat_g": 2.1,
    "fibre_g": 1.8,
    "folate_ug": 6.0,
    "iron_mg": 0.5,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 168.0,
    "protein_g": 3.5,
    "salt_g": 0.065,
    "sat_fat_g": 0.847,
    "sodium_mg": 26.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167720",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
