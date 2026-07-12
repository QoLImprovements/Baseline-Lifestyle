/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167659",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Restaurant, Latino, chicken and rice, entree, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 20.0,
    "energy_kcal": 727.0,
    "fat_g": 5.06,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 0.95,
    "magnesium_mg": 18.0,
    "omega3_g": 0.122,
    "phosphorus_mg": 122.0,
    "potassium_mg": 184.0,
    "protein_g": 12.0,
    "salt_g": 1.295,
    "sat_fat_g": 1.1,
    "sodium_mg": 518.0,
    "sugar_g": 0.55,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167659",
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
