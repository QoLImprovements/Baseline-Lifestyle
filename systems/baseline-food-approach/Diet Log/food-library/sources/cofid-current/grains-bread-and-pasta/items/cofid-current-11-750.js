/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "13 samples, 6 products, including Rice Krispies and own brand",
  "id": "cofid-current-11-750",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, rice, toasted/crisp, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 91.2,
    "energy_kcal": 374.0,
    "fat_g": 1.0,
    "fibre_g": 0.7,
    "folate_ug": 180.0,
    "iron_mg": 11.0,
    "magnesium_mg": 41.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 141.0,
    "potassium_mg": 146.0,
    "protein_g": 5.7,
    "salt_g": 0.925,
    "sat_fat_g": 0.22,
    "sodium_mg": 370.0,
    "sugar_g": 12.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-750",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
