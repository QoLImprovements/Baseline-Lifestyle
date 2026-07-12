/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.7,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, ALIMENTUM ADVANCE, with iron, powder, not reconstituted, with DHA and ARA",
  "nutritionPerBasis": {
    "calcium_mg": 534.0,
    "carbs_g": 51.9,
    "energy_kcal": 2160.0,
    "fat_g": 28.2,
    "fibre_g": 0.0,
    "folate_ug": 76.0,
    "iron_mg": 9.16,
    "magnesium_mg": 38.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 382.0,
    "potassium_mg": 598.0,
    "protein_g": 14.0,
    "salt_g": 0.56,
    "sat_fat_g": 14.3,
    "sodium_mg": 224.0,
    "sugar_g": 34.2,
    "vitamin_a_ug": 458.0,
    "vitamin_c_mg": 45.8,
    "vitamin_e_mg": 10.2,
    "vitamin_k_ug": 76.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170988",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
