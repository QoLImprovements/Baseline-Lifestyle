/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167663",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Restaurant, Latino, pupusas del cerdo (pupusas, pork)",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 23.0,
    "energy_kcal": 971.0,
    "fat_g": 10.4,
    "fibre_g": 2.6,
    "folate_ug": 4.0,
    "iron_mg": 1.01,
    "magnesium_mg": 38.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 162.0,
    "potassium_mg": 255.0,
    "protein_g": 11.5,
    "salt_g": 1.065,
    "sat_fat_g": 3.17,
    "sodium_mg": 426.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167663",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "meat-and-poultry",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
